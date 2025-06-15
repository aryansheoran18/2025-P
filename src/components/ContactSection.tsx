import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Send } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  bioText?: string;
  profileImage?: string;
}

const ContactSection = ({
  title = "CONTACT",
  bioText = "Hi there! I'm a passionate graphic designer specializing in digital art, branding, and visual storytelling. With over 5 years of experience in the industry, I bring creativity and technical expertise to every project.",
  profileImage = "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748689407/about-me-120-120-web_ue2ysf.png",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wider">
            {title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Bio Section */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-70"></div>
                      <Avatar className="h-32 w-32 border-4 border-gray-800 relative">
                        <AvatarImage src={profileImage} alt="Profile" />
                        <AvatarFallback className="bg-gray-700 text-xl">
                          PF
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        About Me
                      </h3>
                      <p className="text-gray-300">{bioText}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-700 hover:text-blue-400 group"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/aryan-sheoran18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Linkedin className="mr-2 h-5 w-5 group-hover:text-blue-400" />
                        LinkedIn
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-700 hover:text-pink-400 group"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/edi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Instagram className="mr-2 h-5 w-5 group-hover:text-pink-400" />
                        Instagram
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-700 hover:text-white group"
                      asChild
                    >
                      <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-5 w-5 group-hover:text-white" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
