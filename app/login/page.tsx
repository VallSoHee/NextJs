import styles from "./login.module.css"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (

    
    <Card className={styles.loginCard} >  
        <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
                Enter your email below to login to your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form className="grid w-full items-center gap-4">
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder= "Enter your email" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder= "Enter your password" />
                </div>
                <CardFooter>
                    <CardAction className="w-full">
                        <button className="w-full rounded-md bg-primary text-white px-4 py-2">
                            Login
                        </button>
                    </CardAction>
                </CardFooter>
            </form>
        </CardContent>
    </Card>
  
  )
}  