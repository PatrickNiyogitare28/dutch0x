import Features from '@/components/UI/molecules/Features';
import Nav from '@/components/UI/molecules/Nav';
import RecentActivities from '@/components/UI/templates/RecentActivities';
import React from 'react';

export default function LandingPage() {
 return (
   <div className='min-h-screen bg-base '>
     <Nav />
     <Features />
     <RecentActivities />
   </div>
 )
}