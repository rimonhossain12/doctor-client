import React from 'react';
import Infos from './Infos';
import clock from '../../../src/assets/icons/clock.svg';
import marker from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg';

const Information = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
            <Infos name="opening Hour" img={clock} desc="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Totam, repellendus." bgColor="bg-gradient-to-r from-primary to-secondary text-white"></Infos>
            <Infos name="visit our location" img={marker} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, 
            repellendus." bgColor="bg-[#3A4256] text-white">
            </Infos>
            <Infos name="contact us now" img={phone} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam, repellendus." bgColor="bg-gradient-to-r from-primary to-secondary text-white"></Infos>
        </div>
    );
};

export default Information;