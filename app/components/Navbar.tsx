
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




function Navbar() {
  const userId = true
  return (
    <nav className='h-[61px] w-full flex items-center justify-between px-4 lg:px-8'>
       {/* LEFT SECTION  */}
       <section className='flex items-center gap-10'>
            <h1 className='text-2xl font-bold text-[#FF7349]'>TAPEDGE</h1>

            <ul className='flex gap-5 text-[15px]'>
                <Link className='navLinkHover' href={'/dashboard'}>Home</Link>
                <Link className='navLinkHover' href={'/'}>Review Card</Link>
                <Link className='navLinkHover' href={'/'}>Why TapEdge?</Link>
                <Link className='navLinkHover' href={'/'}>FAQ</Link>
                <Link className='navLinkHover' href={'/'}>Contact</Link>
            </ul>
       </section>
       {/* RIGHT SECTION */}
       <section className='flex items-center gap-4 text-[15px]'>
          
            {/* SHOPPING BAG */}
            <Image className=' cursor-pointer hover:scale-105 duration-200 ease-in' src={'/shoppingBag.png'} width={17} height={17} alt='tapedge profile clipart icon' />

            {/* IF USER IS LOGGED OUT */}
            {
              !userId && ( 
              <>
                     <Sheet>
      <SheetTrigger>
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Welcome Name, Account
           <span>  
              {/* USER PROFILE */}
                user button
        
      </span>
      </SheetTitle>
          <SheetDescription className="py-4 flex items-center justify-center text-center">
            <Tabs defaultValue="signup" className="w-[400px]">
              <TabsList className="">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>
              <TabsContent className="py-2" value="login">
                sign in
              </TabsContent>
              <TabsContent value="signup">
                sign up
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
            

    {/* USER PROFILE */}
    user profile
            
            
              
              </>
              )
            }

            {/* IF USER IS LOGGED IN */}
            {
              userId && ( 
              <>
                     <Sheet>
      <SheetTrigger>
          v-profile
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Welcome to your portal
           <span>  
        
      </span>
      </SheetTitle>
          <SheetDescription className="py-4 flex items-center justify-center text-center">
            <Tabs defaultValue="portalSignIn" className="w-[400px]">
              <TabsList className="">
                <TabsTrigger value="portalSignIn">Portal Sign In</TabsTrigger>
                <TabsTrigger value="help">Help</TabsTrigger>
              </TabsList>
              <TabsContent className="py-2" value="portalSignIn">
                this is will be portal sign in
              </TabsContent>
              <TabsContent value="help">
                this will helpl
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
            

    {/* USER PROFILE */}
    user button
            
            
              
              </>
              )
            }
            
   
       </section>
    </nav>
  )
}

export default Navbar
