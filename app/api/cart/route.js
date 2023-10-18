import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.carts.groupBy({
      by: ["user_id"],
      _count: { email: true },
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
    let createCart = prisma.carts.create({
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        title: "Cloth",
        sessionId: "hsdfghsd-fsdfsdf-sdfsdfsdf",
        token: "mdfkjsdmcdfhdbfsdfgsdfjlsdfjlsdfmsdfj",
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "019833224576",
        email: "rakib13x@gmail.com",
        city: "BrahmanBaria",
        country: "BD",
      },
    });
    const result = await prisma.$transaction([createCart]);
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
    let updateOrder = prisma.carts.update({
      where: {
        id: 1,
      },
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        title: "update test",
        sessionId: "hsdfghsd-fsdfsdf-sdfsdfsdf",
        token: "mdfkjsdmcdfhdbfsdfgsdfjlsdfjlsdfmsdfj",
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "01983224576",
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
    let result = await prisma.carts.delete({
      where: {
        id: 1,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
