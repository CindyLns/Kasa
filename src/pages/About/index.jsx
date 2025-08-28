import Banner from '../../components/Banner';
import bannerAbout from "../../assets/banner-about.png"; 
import data from '../../datas/collapse.json';
import Collapse from '../../components/Collapse';


function About() {
      return (
      <div className='container-home'>
            <Banner
                  background={bannerAbout}
            />
            <div className='collapse-container'>
                  {data.map(({ title, description }, index) => (
                        <Collapse
                              key={index}
                              title={title}
                              children={description}
                        />
                  ))}

            </div>           
      </div>

      )
}

export default About