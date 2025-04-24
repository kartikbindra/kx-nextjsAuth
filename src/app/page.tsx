import React from 'react';
import Link from 'next/link';
import FollowCursor from './ui/followCursor';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-white min-h-screen font-[Overused_Grotesk] mt-16 text-lg">
      <FollowCursor/>
      <h1 className="text-5xl font-[Instrument_Serif] mb-4">KraftedX Practical Assignment</h1>
      <p className='text-[#ccc] text-xl mb-4'>⚠️ Disclaimer: Read this or lose a great candidature!</p>
      <h1 className="text-lg">Hi! This is Kartik Bindra 👋🏻</h1>
      <p className="text-lg mb-8">
      A little about me, I'm a dedicated software engineer skilled in Full-Stack development, Blockchain development, and UI/UX Design, focused on building impactful and scalable solutions. I thrive in dynamic environments where I can apply my skills in coding, problem-solving, and design to build impactful projects. More about me here: <Link href="https://kartikbindra.xyz" target="_blank" className="underline flex gap-2 items-center inline-flex ml-1 text-[#ccc]">Check out my Portfolio <ExternalLink className='w-4 h-4'/></Link>
      </p>
      

      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Task Submission</h2>
        <p>Now, Lets talk about the Task Submission (’cause that is what you are here for anyways!)</p>
        <p>So I will go through the <b>approach</b> I took to implement the asked functionalities, <b>what I learnt</b> along the way in contrast to <b>what I already knew</b> and the deeper understanding of all the things (& how they work under the hood). Here I go!</p>
        {/* <p className="mb-6">Let’s dive into the <em>what</em>, <em>why</em>, and <em>how</em> of the task! I’ll walk you through:</p> */}
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">🔐 Next.js Authentication using JWT</h2>
        <p className="mb-4">Instead of going the easy route with third-party libraries (like Auth.js), I decided to build the auth logic from scratch using <b>JWT</b> (JSON Web Tokens). Why? Because understanding how things actually work is <i>chef’s kiss</i> for any real dev. 🤌🏻</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">What I Already Knew</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>JWT-based auth in a React + Express.js Setup</li>
          <li>Access Token (Client Side Token) & Refresh Token (Server Side Token) in JWT Authentication</li>
          <li>Zod Form data validation</li>
          <li>Connecting serverless databases like NeonDB</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">What I Learned</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>JImplementing JWT with the <code className='px-1 py-0.2 bg-foreground/15 rounded-sm'>jose</code> library in a Next.js app</li>
          <li>Creating custom middlewares for auth logic</li>
          <li>Realizing that Access Tokens aren’t necessary in a full Next.js setup (since it handles both client & server)</li>
          <li><code className='px-1 py-0.2 bg-foreground/15 rounded-sm'>useActionState()</code> hook</li>
        </ul>

        <div className="mt-4">🔗 <strong>Go Ahead and check it out here</strong> 
        <div className='flex gap-2 mt-2'>
          <Link className="px-6 py-2 bg-foreground text-background rounded-md font-medium hover:bg-foreground/80 transition duration-300" href={'/signup'}>Signup</Link>
          <Link className="px-6 py-2 bg-background text-foreground rounded-md font-medium border-1 border-foreground/25 hover:bg-foreground/5 transition duration-300" href={'/login'}>Login</Link>
        </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-2">Architecture</h2>
        <p className='mb-4'> I would like to explain the 2 different approaches for authentication with JWT. One that used React with a Express.js Server and the other using Next.js Client and Server Actions. Lets see both of them:</p>
        <h3 className="text-2xl font-semibold mb-2">React + Server Based Authentication with JWT</h3>
        <p className="mb-4 italic">Architecture Diagram Coming Soon</p>
        <h3 className="text-2xl font-semibold mb-2">Next.js Authentication with JWT (Server Actions + Middleware)</h3>
        <p className="italic">Architecture Diagram Coming Soon</p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">🎨 Blob Gradient Dynamic Background</h2>
        <p className="mb-4">Reverse engineering this gradient was hell of a task to be completed. What helped me the most was the browser inspect tbh 👀</p>

        <h3 className="text-2xl font-semibold mb-2">What I Observed</h3>
        <p>The <Link href={'https://kraftedx.com'} target="_blank" className="underline flex gap-2 items-center inline-flex ml-1 text-[#ccc]">kraftedX.com <ExternalLink className='w-4 h-4'/></Link> website had 6 Blobs/circles/divs that were moving around the whole background space with different animations applied to them: Circular Rotation Animation, Horizontal & Vertical Animations. Each blob had a gradient applied to it. Every blob had a functionality that helped them “gravitate” towards the cursor whenever they were close to it. (or maybe vice versa, the cursor blob was getting gravitated towards the blobs whenever they were close enough!)</p>
        {/* <ul className="list-disc list-inside space-y-1">
          <li>6 animated blobs with gradients</li>
          <li>Circular + linear movement</li>
          <li>Gravitational/magnetic effect near cursor</li>
        </ul> */}

        <h3 className="text-2xl font-semibold mt-6 mb-2">What I Built</h3>
        <div>I implemented the animated background using 6 circular divs and a cursor pointer div. I applied almost similar animations to the blobs that I found on the KraftedX website. Although I was not able to figure out the magnetic/ gravitating effect of the blobs and the mouse pointer. <br/> <blockquote className="mt-2 p-4 italic border-l-4 border-foreground/50 bg-foreground/5 text-foreground rounded-md">Would love to work "gravitate" feature too, but had to leave it due to upcoming end-semester examination pressure, IYKYK! 🥲</blockquote></div>
        {/* <ul className="list-disc list-inside space-y-1">
          <li>6 animated gradient blobs using divs</li>
          <li>One cursor-following blob</li>
          <li>Almost identical animations</li>
          <li>Still working on the magnetic effect (end-sems 🥲)</li>
        </ul> */}

        <p className="mt-4 mb-2"> Want to see the animations in action? Visit the Home and interact with the background there. Hope you like it!</p>
        <div className="flex gap-2 items-center">
        <Link className="px-6 py-2 bg-foreground text-background rounded-md font-medium hover:bg-foreground/80 transition duration-300" href={'/home'}>Home</Link>
        <p className=' text-[#ccc] text-sm'> Remember to Login first, or else you would not be able to access the Home page!</p></div>
      </section>

      <section className="mt-12">
        <p className="mb-4">
        Thanks for checking out my submission. Hope it gave you a peek into how I approach problems and build solutions that are equal parts functional and delightful.
        </p>
        <p className="font-medium">Thanks for reading, hope you enjoyed the walkthrough</p>
        <p className="mt-2">Signing off,<br />Chao chao! ✌️</p>
      </section>
      {/* <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect!</h2>>
      </section> */}
    </div>
  );
};

export default Home;
