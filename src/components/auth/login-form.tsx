"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple validation
    if (!username || !password) {
      setError("Please enter both username and password")
      setIsLoading(false)
      return
    }

    try {
      // Simulate login - accept any non-empty credentials
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Set a simple auth cookie/token
      document.cookie = "auth-token=authenticated; path=/; max-age=86400"

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">Log in</h2>
      <p className="text-gray-600 mb-8">Enter your username and password</p>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="spinner mr-2"></div>
              Logging in...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              Log in
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </div>
  )
}
