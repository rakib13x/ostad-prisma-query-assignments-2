import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let result = await prisma.products.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    const createProduct = prisma.products.create({
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        firstName: "Pant",
        metaTitle: "Test meta",
        slug: "Cloth",
        summary: "Cloth",
        price: 500,
        discount_price: 100,
      },
    });

    const createProductMeta = prisma.product_meta.create({
      data: {
        products: {
          connect: {
            id: 1,
          },
        },
        key: "color",
        content: "navy-Blue",
      },
    });

    const createProductReview = prisma.product_review.create({
      data: {
        products: {
          connect: {
            id: 1,
          },
        },
        title: "Nice",
        rating: "5",
        content: "test",
      },
    });

    const result = await prisma.$transaction([
      createProduct,
      createProductMeta,
      createProductReview,
    ]);

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let deleteProductReview = prisma.product_review.deleteMany({
      where: {
        product_id: 1,
      },
    });
    let deleteProductMeta = prisma.product_meta.deleteMany({
      where: {
        product_id: 1,
      },
    });
    let deleteProduct = prisma.products.delete({
      where: {
        id: 1,
      },
    });

    const result = await prisma.$transaction([
      deleteProductReview,
      deleteProductMeta,
      deleteProduct,
    ]);
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
