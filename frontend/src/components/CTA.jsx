import { useNavigate } from "react-router-dom";

const CTASection = () => {

  const navigate = useNavigate();
    return (
      <section className="py-16 text-center bg-green-600 text-white p-6">
        <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
        <p className="mt-3 text-lg">Join thousands of users improving their well-being.</p>
        <button

        onClick={() => navigate("/auth")}
        
        className="mt-6 px-6 py-3 bg-white text-green-700 rounded-full font-semibold shadow-lg hover:bg-green-200 transition">
          Sign Up Now
        </button>
      </section>
    );
  };
  
  export default CTASection;
  