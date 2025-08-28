import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../datas/accommodation.json';
import banner from "../../assets/banner.png"; 

function Home() {
      
      return (
      <div className='container-home'>
            <Banner
                  background={banner}
                  title={'Chez vous, partout et ailleurs'}
            />
            <div className='card-container'>
                  <ul className='card-list'>
                        {data.map((item) => (
                              <Card
                                    key={item.id}
                                    id={item.id}
                                    cover={item.cover}
                                    title={item.title}
                
                              />
                        ))}
                  </ul>
             </div>
      </div>

      )
}

export default Home
