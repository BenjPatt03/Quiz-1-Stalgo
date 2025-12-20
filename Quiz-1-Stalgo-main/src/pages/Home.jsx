import React, { memo, useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import apiClient from '../apiClient';

const Home = memo(function Home() {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      try {
        const response = await apiClient.get('/companies/');
        const firstCompany = Array.isArray(response.data) ? response.data[0] : null;
        setCompanyData(firstCompany);
      } catch (err) {
        console.error('Failed to load company data from API', err);
      }
    }

    fetchCompany();
  }, []);

  return (
    <main role="main">
      <HeroSection company={companyData} />
      <FeaturesSection company={companyData} />
      <BenefitsSection company={companyData} />
      <TestimonialsSection company={companyData} />
    </main>
  );
});

Home.displayName = 'Home';

export default Home;
