
const HeroImage = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Light/dark mode responsive background */}
      <div className="absolute inset-0 bg-sky-200 dark:bg-portfolio-navy-deep transition-colors duration-300"></div>
      
      {/* Main background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/72165df4-6e11-4b92-8129-e976fa6821b2.png" 
          alt="Salesforce Forest Scene" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
