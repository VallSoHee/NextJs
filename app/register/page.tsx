import styles from "./register.module.css"

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
export default function RegisterPage() {
  return (
    <Card className={styles.registerCard}>
        <CardHeader>
<Card>
        <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
                Create an account to access all features
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
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder= "Confirm your password" />
                </div>
                <CardFooter>
                    <CardAction className="w-full">
                        <button className="w-full rounded-md bg-primary text-white px-4 py-2">
                            Register
                        </button>
                    </CardAction>
                </CardFooter>
            </form>
        </CardContent>
    </Card>
        </CardHeader>
    </Card>
    )
}

                    