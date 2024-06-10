import { Request, Response } from "express";

import Stripe from "stripe";
import Restaurant, { MenuItemType } from "../models/restaurant.model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const frontend_url = process.env.CLIENT_HOSTNAME as string;

interface CheckoutSessionReq {
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    email: string;
    addressLine1: string;
    country: string;
    city: string;
  };
  restaurantId: string;
}

export const createCheckoutSession = async (req: Request, res: Response) => {
  try {
    const checkoutSessionReq: CheckoutSessionReq = req.body;

    const restaurant = await Restaurant.findById(
      checkoutSessionReq.restaurantId
    );

    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    const lineItems = createLineItems(checkoutSessionReq, restaurant.menuItems);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.raw.message });
  }
};

function createLineItems(
  checkoutSessionReq: CheckoutSessionReq,
  menuItems: MenuItemType[]
) {
  const lineItems = checkoutSessionReq.cartItems.map((cartItem) => {
    const menuItem = menuItems.find(
      (item) => item._id.toString() === cartItem.menuItemId.toString()
    );

    if (!menuItem) {
      throw new Error("Menu item not found");
    }

    
  });
}
