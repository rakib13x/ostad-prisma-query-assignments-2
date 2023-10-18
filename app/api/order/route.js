import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.orders.aggregate({
      _avg: { grandTotal: true },
      _count: { discount: true },
      _max: { grandTotal: true },
      _min: { grandTotal: true },
      _sum: { grandTotal: true },
    });
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
    let createOrder = prisma.orders.create({
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        title: "3001",
        token: "fhsdgfhsdhftsgdfvhgsdfhsfhsg",
        subTotal: 120,
        ItemDiscount: 0,
        tax: 13,
        total: 143,
        discount: 0,
        grandTotal: 143,
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "082372173822",
        email: "rakib13x@gmail.com",
        city: "BrahmanBaria",
        country: "BD",
      },
    });

    const result = await prisma.$transaction([createOrder]);
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let updateOrder = prisma.orders.update({
      where: {
        id: 1,
      },
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        title: "3001",
        token: "fjksdhfsdhfkjsdyfhfjdfhsdjfhsdhfjdsfh",
        subTotal: 10,
        ItemDiscount: 0,
        tax: 1,
        total: 11,
        discount: 0,
        grandTotal: 11,
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "0108237827323",
        email: "rakib13x@gmail.com",
        city: "BrahmanBaria",
        country: "BD",
      },
    });
    const result = await prisma.$transaction([updateOrder]);
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
    let result = await prisma.orders.delete({
      where: {
        id: 1,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
