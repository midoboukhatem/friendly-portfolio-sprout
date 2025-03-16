
const HeroImage = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Animated blobs in background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-teal-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-portfolio-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-portfolio-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-10"></div>
      
      {/* Main background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/67788e89-aad3-45ed-8ebc-d9c955b39ebe.png" 
          alt="Salesforce Nature Background" 
          className="max-w-full max-h-full object-contain opacity-20 dark:opacity-10"
        />
      </div>
    </div>
  );
};

export default HeroImage;
