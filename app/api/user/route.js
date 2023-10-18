import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.findMany();
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
    let createUser = prisma.users.create({
      data: {
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "01121234355",
        email: "rakib13x@gmail.com",
        password: "1234",
        admin: 1,
      },
    });
    const result = await prisma.$transaction([createUser]);
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
    let updateUser = prisma.users.update({
      where: {
        id: 1,
      },
      data: {
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "0123456756",
        email: "rakib13x@gmail.com",
        password: "123456",
      },
    });
    const result = await prisma.$transaction([updateUser]);
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
    let result = await prisma.users.delete({
      where: {
        id: 1,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
