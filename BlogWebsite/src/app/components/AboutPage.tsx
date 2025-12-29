import { Mail, MapPin, Phone } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
          About MyBlog
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We're a team of passionate writers and creators dedicated to sharing stories, 
          insights, and knowledge about technology, lifestyle, travel, and design.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MyBlog, we believe in the power of storytelling and the importance of 
            sharing knowledge. Our mission is to create meaningful content that inspires, 
            educates, and connects people from all walks of life.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're looking for the latest tech insights, lifestyle tips, 
            travel inspiration, or design trends, we're here to provide you with 
            high-quality content that adds value to your day.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Chief Editor',
              specialty: 'Technology & Innovation',
            },
            {
              name: 'Michael Chen',
              role: 'Lifestyle Writer',
              specialty: 'Productivity & Wellness',
            },
            {
              name: 'Emma Williams',
              role: 'Travel Correspondent',
              specialty: 'Adventure & Culture',
            },
            {
              name: 'David Park',
              role: 'Tech Analyst',
              specialty: 'AI & Emerging Tech',
            },
            {
              name: 'Lisa Anderson',
              role: 'Design Lead',
              specialty: 'Creative & UX',
            },
            {
              name: 'James Martinez',
              role: 'Travel Writer',
              specialty: 'Destinations & Photography',
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl mb-6 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p>hello@myblog.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Location</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
