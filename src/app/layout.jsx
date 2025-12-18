import { poppins } from "../ui/fonts";
import { ThemeProvider } from "@/context/themeContext";
import "./globals.css";



export const metadata = {
  title: "JC Faderanga",
  description: "JC Faderanga's personal website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            <ThemeProvider>
                <div className=' w-full mx-auto relative'>
                  {children}
                </div>       
            </ThemeProvider>
        </body>        
    </html>
  );
}
