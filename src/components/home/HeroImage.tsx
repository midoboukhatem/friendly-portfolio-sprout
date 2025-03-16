
const HeroImage = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-portfolio-teal-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-portfolio-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-portfolio-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative">
        <img 
          src="/lovable-uploads/76fc40c0-cc4b-4269-a802-4868c37d710e.png" 
          alt="Portfolio Hero" 
          className="relative rounded-lg shadow-xl animate-float"
        />
      </div>
    </div>
  );
};

export default HeroImage;
