import React from "react";
import axios from "axios"
import { Image, Stack, Text ,SimpleGrid,Box} from '@chakra-ui/react'
import "./css/HealthcareCarousel.css"
import { useEffect,useState } from "react";
import MediaQuery from 'react-responsive'
import { AboutHealthcare } from "./AboutHealthcare";
import { Achievement } from "./Achievement";
import { DownLoadApp } from "./DownLoadApp";
import HealthcareCarousel from "./HealthcareCarousel";
import Footer from "../Footer/Footer";

export const Healthcare=()=>{
    const [data,setData]=useState("")
    const getData=()=>{
        axios.get(`http://localhost:8080/healthCarePage`)
        .then((r)=>{
            const healthcare=r.data.categories
                console.log(healthcare)
                setData(healthcare) 
        }).catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <section className="ankita">
            <HealthcareCarousel/>
            </section>
            
            <div>
              <MediaQuery minWidth={1200} maxWidth={2000}>
                <SimpleGrid columns={3} spacingX='20px' spacingY='20px'  marginLeft="8em" marginRight="8em">
                {data.length>0 && data.map((ele)=>(
                  
                        <Box  _hover={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                       box-shadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        key={ele.id} border='0.5px solid #c0b0c0' borderRadius={10} width={340} 
                        boxShadow='3px 0 8px 1px var(--chakra-colors-dark-background)'
                        paddingTop="10px" paddingBottom="10px"
                        >
                        <SimpleGrid columns={3} spacing={5}>
                        
                            <Image src={ele.imageUrl}boxSize='80px' paddingLeft="30px"></Image>
                            <Text margin="auto" paddingTop={3} >{ele.name}</Text>
                            <Text margin="auto" textAlign="center" paddingTop={3} color="#319795">{ele.discountText}</Text>
                        </SimpleGrid>
                        </Box>
                  
                )
                  
                )}
                  </SimpleGrid>
                </MediaQuery>
                <MediaQuery minWidth={1000} maxWidth={1199}>
                <SimpleGrid columns={3} spacingX='10px' spacingY='10px'  marginLeft="8em" marginRight="8em">
                {data.length>0 && data.map((ele)=>(
                  
                        <Box  _hover={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                       boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        key={ele.id} border='0.5px solid #c0b0c0' borderRadius={10} width={250} 
                      
                        paddingTop="10px" paddingBottom="10px"
                        >
                        <SimpleGrid columns={3} spacing={5}>
                        
                            <Image src={ele.imageUrl}boxSize='80px' paddingLeft="20px"></Image>
                            <Text margin="auto" paddingTop={3}>{ele.name}</Text>
                            <Text margin="auto" paddingTop={3} color="#319795">{ele.discountText}</Text>
                        </SimpleGrid>
                        </Box>
                  
                )
                  
                )}
                  </SimpleGrid>
                </MediaQuery>
                <MediaQuery minWidth={601} maxWidth={999}>
                <SimpleGrid columns={1} spacingX='10px' spacingY='10px'  marginLeft="8em" marginRight="8em">
                {data.length>0 && data.map((ele)=>(
                  
                        <Box  _hover={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                       boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        key={ele.id} border='0.5px solid #c0b0c0' borderRadius={10} width='autofit'
                       
                        paddingTop="10px" paddingBottom="10px"
                        >
                        <SimpleGrid columns={3} spacing={5}>
                            <Box   marginLeft="2em"gap="auto">
                            <Image src={ele.imageUrl}boxSize={20} paddingLeft="10px"></Image>
                           
                            </Box>
                             <Box>
                             <Text paddingTop={5} >{ele.name}</Text>
                             </Box>
                            <Text paddingTop={5} marginLeft="1em" color="#319795">{ele.discountText}</Text>
                        </SimpleGrid>
                        </Box>
                  
                )
                  
                )}
                  </SimpleGrid>
                </MediaQuery>
                <MediaQuery minWidth={1} maxWidth={600}>
                <SimpleGrid columns={1} spacingX='5px' spacingY='5px'  marginLeft="2em" marginRight="2em">
                {data.length>0 && data.map((ele)=>(
                  
                        <Box  _hover={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                       boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        key={ele.id} border='0.5px solid #c0b0c0' borderRadius={10} width='autofit'
                       
                        paddingTop="10px" paddingBottom="10px"
                        >
                        <SimpleGrid columns={3} spacing={5}>
                            <Box   marginLeft="2em"gap="auto">
                            <Image src={ele.imageUrl}boxSize={20} paddingLeft="10px"></Image>
                           
                            </Box>
                             <Box>
                             <Text paddingTop={5} >{ele.name}</Text>
                             </Box>
                            <Text paddingTop={5} marginLeft="1em" color="#319795">{ele.discountText}</Text>
                        </SimpleGrid>
                        </Box>
                  
                )
                  
                )}
                  </SimpleGrid>
                </MediaQuery>
                
            </div>
            <AboutHealthcare/>
            
            <MediaQuery minWidth={1000} maxWidth={2000}>
                <Achievement/>
            </MediaQuery>
            
            <DownLoadApp/>
            <Footer/>
            
        </>  
    )
}
