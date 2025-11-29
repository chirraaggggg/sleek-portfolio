"use client"
import SectionTitle from "../SectionTitle"
import { chiragContact, chiragContactLink } from "@/data/ChiragData/data"

const ReachOut = () => {
  const contact = chiragContact
  const contactLink = chiragContactLink

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Contact me" />
      <div className=" flex flex-col gap-2.5">
        <p>{contact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {contactLink.map((link) => {
              // Define colors based on the contact method
              const iconColors = {
                'GitHub': 'text-white',
                'X (Twitter)': 'text-white',
                'Twitter': 'text-white',
                'LinkedIn': 'text-[#0A66C2] hover:text-white',
                'Email': 'text-red-500 hover:text-white',
                'LeetCode': 'text-yellow-500 hover:text-white',
                'Discord': 'text-[#5865F2] hover:text-white',
                'Bluesky': 'text-blue-500 hover:text-white'
              };
              
              // Find the matching color class or use a default
              const colorClass = Object.entries(iconColors).find(([key]) => 
                link.name.toLowerCase().includes(key.toLowerCase())
              )?.[1] || 'text-zinc-400 hover:text-white';
              
              return (
                <a 
                  key={link.id} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href={link.link}
                  className="group flex items-center gap-2 hover:bg-opacity-80 bg-zinc-800/50 transition-all duration-200 px-3 py-1.5 rounded-md border border-zinc-700/50 hover:scale-105"
                >
                  <link.icon className={`text-lg ${colorClass} transition-colors duration-200`} />
                  <span className="text-white text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
