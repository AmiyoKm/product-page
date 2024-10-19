import { useState , useContext } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { FaReact, FaShoppingCart } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MdOutlineDensitySmall } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IoMdSettings } from 'react-icons/io'
import { ModeToggle } from '@/mode-toggle'
import { GlobalContext } from '@/Context/GlobalContext'

const Navbar = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [input ,setInput] = useState('');
  const { handleInput } : any  = useContext(GlobalContext)

  return (
    <div >
      <div className="shadow-md py-4">
        <NavigationMenu className='container mx-auto'>
          <NavigationMenuList className='flex items-center space-x-28'>
            {/* Logo */}
            <NavigationMenuItem>
              <Link to="/" className="flex items-center">
                <FaReact className='motion-safe:animate-spin' color='#22d3ee' size={40}/>
                <span className="ml-2 text-xl font-bold">MyApp</span>
              </Link>
            </NavigationMenuItem>
            
            {/* Search */}
            <NavigationMenuItem className='flex space-x-2 items-center'>
              <Input value = {input} onChange={(e) => setInput(e.target.value)} placeholder='Search...' className="w-80" />
              <Button onClick={() => handleInput(input)} variant="secondary">Search</Button>
            </NavigationMenuItem>

            {/* Browse */}
            <NavigationMenuItem 
              className='relative'
              onMouseEnter={() => setIsBrowseOpen(true)}
              onMouseLeave={() => setIsBrowseOpen(false)}
            >
              <NavigationMenuTrigger className="flex items-center space-x-2">
                <MdOutlineDensitySmall size={30} />
                <span>Browse</span>
              </NavigationMenuTrigger>

              {/* Conditional rendering of the card */}
              {isBrowseOpen && (
                <div className="absolute left-0 mt-2 z-50">
                  <NavigationMenuContent >
                    <Card className="w-64 shadow-lg">
                      <CardHeader>
                        <CardTitle className='text-sm'>Browse Through</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='grid grid-cols-3 gap-2'>
                          <IoMdSettings className="text-xl"/>
                          <IoMdSettings className="text-xl"/>
                          <IoMdSettings className="text-xl"/>
                        </div>
                      </CardContent>
                    </Card>
                  </NavigationMenuContent>
                </div>
              )}
            </NavigationMenuItem>
            
            {/* Cart */}
            <NavigationMenuItem className=''>
              <Link to="/cart" className="text-lg font-medium flex space-x-2 items-center">
                <span>Cart</span>
                <FaShoppingCart color='#22d3ee' size={30} />
              </Link>
            </NavigationMenuItem>

            {/* Mode Toggle */}
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Navbar
