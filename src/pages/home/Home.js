import Filter from '../../component/filter/Filter';
import Herosection from '../../component/herosection/Herosection';
import { Layout } from '../../component/layout/Layout';
import ProductCard from '../../component/product/ProductCard';
import Testimonial from '../../component/testimonial/Testimonial';
import Track from '../../component/track/Track';

const Home = () => {

  return (
    <Layout>
      <Herosection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>


    </Layout>
  )
}

export default Home


