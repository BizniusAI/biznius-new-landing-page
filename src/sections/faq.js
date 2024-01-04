/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What makes Biznius.ai different from other AI customer support solutions?',
    contents: (
      <div>
        Biznius.ai is uniquely designed for e-commerce businesses, focusing on creating a brand-aligned customer service experience. Our AI agents are not only sophisticated and efficient but also customizable to embody the unique voice of your brand, ensuring a fun and engaging interaction for your customers.
      </div>
    ),
  },
  {
    title: 'How can Biznius.ai improve my customer service quality?',
    contents: (
      <div>
        Biznius.ai enhances your customer service quality by aiding in the creation of a comprehensive customer service handbook. This handbook serves as a foundational model for the AI CS agent, ensuring that it responds with accuracy and consistency. The AI CS agent follows the guidelines set forth in the handbook, providing reliable and on-brand customer interactions tailored to your business's unique voice.
      </div>
    ),
  },
  {
    title: 'Can Biznius.ai integrate with my existing e-commerce platform?',
    contents: (
      <div>
        Absolutely! Biznius.ai is designed for seamless integration with popular Direct-to-Consumer platforms like Shopify and WooCommerce. Our team will assist you throughout the integration process to ensure your AI CS agent is up and running smoothly on your platform.
      </div>
    ),
  },
  {
    title: 'What kind of analytics does Biznius.ai provide?',
    contents: (
      <div>
        Our platform offers in-depth interaction analytics to give you valuable insights into trending topics and customer behavior. This data helps you refine your response strategies and improve customer satisfaction over time.
      </div>
    ),
  },
  {
    title: 'How long does it take to set up Biznius.ai for my business?',
    contents: (
      <div>
        Setup time can vary depending on the complexity of your needs, but our streamlined process can get your basic text customer service AI agent running in a short period.
      </div>
    ),
  },
  {
    title: 'I am interested in your services. How do I find out more about pricing?',
    contents: (
      <div>
        For detailed pricing information and to find a plan that best suits your business needs, please contact our sales team. We will work with you to ensure Biznius.ai provides maximum value for your e-commerce operations.
      </div>
    ),
  },
  {
    title: 'How does Biznius.ai handle updates and improvements to the AI agent?',
    contents: (
      <div>
        We believe in continuous improvement. Our system analyzes previous interactions to suggest enhancements to the customer service handbook and AI agent's responses. We regularly roll out updates to ensure your AI agent is learning and evolving to serve your customers better.
      </div>
    ),
  },
];

export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          // slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
