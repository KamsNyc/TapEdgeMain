
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'



function Navbar() {


  return (
    <nav className='h-[61px] w-full flex items-center justify-between px-4 lg:px-8'>
       {/* LEFT SECTION  */}
       <section className='flex items-center gap-10'>
            <h1 className='text-2xl font-bold text-[#FF7349]'>TAPEDGE</h1>

            <ul className='flex gap-5 text-[15px]'>
                <Link className='navLinkHover' href={'/protected'}>Home</Link>
                <Link className='navLinkHover' href={'/'}>Review Card</Link>
                <Link className='navLinkHover' href={'/'}>Why TapEdge?</Link>
                <Link className='navLinkHover' href={'/'}>FAQ</Link>
                <Link className='navLinkHover' href={'/'}>Contact</Link>
            </ul>
       </section>
       {/* RIGHT SECTION */}
       <section className='flex items-center gap-4 text-[15px]'>
            user avatar
            {/* SHOPPING BAG */}
            <Image className=' cursor-pointer hover:scale-105 duration-200 ease-in' src={'/shoppingBag.png'} width={17} height={17} alt='tapedge profile clipart icon' />
            
          <Sheet>
      <SheetTrigger>
      Account
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Welcome Name, Account</SheetTitle>
          <SheetDescription className="py-4">
            <Tabs defaultValue="signup" className="w-[400px]">
              <TabsList className="">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>
              <TabsContent className="py-2" value="login">
                sign in box
              </TabsContent>
              <TabsContent value="signup">
                sign up box
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
            


            
            
       </section>
    </nav>
  )
}

export default Navbar
