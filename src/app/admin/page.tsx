"use client";

import { useState } from "react";
import { PlusCircle, Search, User, Key, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "mgce-admin-2024") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
          <div className="w-16 h-16 bg-navy/5 text-navy mx-auto rounded-full flex items-center justify-center mb-6">
            <Key className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-center text-navy mb-8">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Enter master password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:border-brand focus:outline-none"
              required
            />
            <Button type="submit" className="w-full bg-brand h-12 text-lg rounded-xl">Unlock Admin Panel</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-cream">
      {/* Admin Sidebar */}
      <div className="w-64 bg-navy text-cream flex flex-col p-6 sticky top-0 h-screen">
        <div className="text-2xl font-bold font-heading text-gold mb-12 mt-4">MGCE Admin</div>
        
        <nav className="space-y-2 flex-1">
          <a href="#" className="flex items-center gap-3 bg-brand/30 text-white font-bold p-3 rounded-xl border border-brand/50">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-colors">
            <Search className="w-5 h-5" /> Manage News
          </a>
          <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-colors">
             Manage Quotes
          </a>
          <a href="#" className="flex items-center gap-3 text-cream/60 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-colors">
            <User className="w-5 h-5" /> Users & Permissions
          </a>
        </nav>
        
        <div className="pt-6 border-t border-cream/10">
          <Button variant="outline" className="w-full bg-transparent border-cream/20 text-cream/60 hover:text-white hover:bg-white/10" onClick={() => setIsAuthenticated(false)}>
            Lock Session
          </Button>
        </div>
      </div>

      {/* Admin Main content */}
      <div className="flex-1 p-8 md:p-12">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold text-navy">Content Management</h1>
            <p className="text-navy/60">Add new articles or update daily quotes.</p>
          </div>
          <Button className="bg-brand text-white gap-2">
            <PlusCircle className="w-5 h-5" /> New Article
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
            <h3 className="font-bold text-navy mb-6 pb-4 border-b">Add Database Record (Mock UI)</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Title" className="w-full p-3 bg-cream/50 border rounded-xl" />
              <input type="text" placeholder="Category" className="w-full p-3 bg-cream/50 border rounded-xl" />
              <textarea placeholder="Content..." rows={4} className="w-full p-3 bg-cream/50 border rounded-xl" />
              <Button type="button" className="w-full bg-navy">Save to Supabase</Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
            <h3 className="font-bold text-navy mb-6 pb-4 border-b">Recent Messages (from Supabase)</h3>
            <div className="p-4 bg-cream/50 rounded-xl mb-4 border border-border/50">
              <p className="font-bold text-sm text-brand-dark mb-1">Jane Doe (jane@example.com)</p>
              <p className="text-navy/80 text-sm">I would like to volunteer for the Siaya bootcamp next month.</p>
            </div>
            <div className="p-4 bg-cream/50 rounded-xl border border-border/50">
              <p className="font-bold text-sm text-brand-dark mb-1">Microsoft CSR Africa</p>
              <p className="text-navy/80 text-sm">Please provide your grant prospectus for 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
