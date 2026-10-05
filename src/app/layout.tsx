import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/Providers/Providers";
import { Toaster } from "sonner";
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"
import { verifyToken } from "@/features/auth/server/auth.actions";
import { authReducer } from "@/features/auth/slices/auth.slice";
import { getCartItem } from "@/features/cart/server/cart.actions";
import { CartInitialValues } from "@/features/cart/slices/cart.slice";
import { WishlistValues } from "@/features/wishlist/slices/wishlist.slice";
import { getUserWishlist } from "@/features/wishlist/server/whishlist.actions";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }: LayoutProps<"/">) {

  const authState = await verifyToken()
  let cartValues: CartInitialValues = {
        status: "",
          message: "",
          numOfCartItems: 0,
          cartId: null,
          data: {
            products: [],
            totalCartPrice: 0
          }
  }

  let wishlistValues: WishlistValues = {
      status: "", 
    message: "",
    count: 0, 
    data: []
  }

  if(authState.isAuthenticated === true) {
    const cartResponse = await getCartItem()
    if(cartResponse.status === "success") {
      cartValues = cartResponse
    }
  }

  if(authState.isAuthenticated === true) {
    const wishlistResponse = await getUserWishlist()
    if(wishlistResponse.status === "success") {
      wishlistValues = wishlistResponse
    }
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers preloadedState = {{authReducer: authState, cartReducer: cartValues, wishlistReducer: wishlistValues}}>
          <Navbar/>
          {children}
          <Toaster richColors/>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
