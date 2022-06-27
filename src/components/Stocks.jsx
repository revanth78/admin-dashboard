import React from 'react';
import styled from 'styled-components';
import {MoreHorizOutlined, KeyboardArrowUp, KeyboardArrowDown, ChevronRight} from '@mui/icons-material';

const Container = styled.div`
        flex: 2;
        padding: 20px;
        background-color: white;
        border-radius: 15px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom:25px;
`
 
// const Heading = styled.div`
//         margin-top: 10px;
//         margin-bottom: 30px;
//         .icon{
//             float:right;
//             cursor: pointer;
//             color: dodgerblue;
//         }
//         .title{
//             float:left;
//             font-size: 20px;
//             font-weight: 500;
//             margin-left: 20px;
//             margin-top: 0px;
//         }
// `
// // const List = styled.ul`
// //         list-style: none;
// //         margin: 0;
// //         padding: 0;
// //         .names{
// //             align-items: flex-start;
// //             margin-left: 0;
// //             padding-left: 0;
// //         }
     
// // `
// const Content = styled.div`
//         /* align-items: flex-start;
//         margin-left: 0;
//         margin-bottom: 0;
//         .company{
//             float:left;
//         }
//         .price{
//             float:right;
//             margin-top:30px;
//         } */
// `
// // const Des = styled.p`
// //         font-size: 12px;
// //         margin-left:20px;
// //         color: red;
// // `
// // const Line = styled.hr`
// //         margin-top: 20px;
// //         margin-bottom: 20px;
// //         border-top: 0px solid lightgray;
// //         border-bottom: 0px;
// // `

//     const Company = styled.div``

//     const Price = styled.div``

//  function Stocks() {
//   return (
//     <Container>
//     <Heading>
//         <p className='title'>Popular Stocks</p>
//         <MoreHorizOutlined className = 'icon'/>
//     </Heading><br />
//     <Content>
//     {/* <List className='company'>
//         <li className='names'>Bajaj Finery</li>
//         <Des style = {{color:'green'}}>10% profit</Des> <Line />
//         <li className='names'>TTML</li>
//         <Des>10% loss</Des> <Line />
//         <li className='names'>Reliance</li>
//         <Des style = {{color:'green'}}>10% profit</Des> <Line />
//         <li className='names'>TTML</li>
//         <Des>10% loss</Des> <Line />
//         <li className='names'>StolonS</li>
//         <Des>10% loss</Des> <Line />
//     </List>
//     <List className='price'>
//         <li className='names'>$1234.00</li> <Line />
        
//         <li className='names'>$100.00</li> <Line />
        
//         <li className='names'>$200.00</li> <Line />
       
//         <li style = {{marginTop:'20px'}} className='names'>$180.00</li> <Line />
        
//         <li style = {{marginTop:'40px'}}  className='names'>$180.00</li> <Line />
//     </List> */}
//         <Company>
//             Relaince
//         </Company>
//         <Price>
//             $180
//         </Price>
//     </Content>
//     </Container>
//   )
// }

const Heading = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
`

const Title = styled.div`
        font-size: 20px;
        font-weight: 700;
        margin-left: 15px;
`

const Icon = styled.div`
        color: dodgerblue;
`

const Main = styled.div`
        display: flex;
        justify-content: space-between;
`

const Company = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 15px;
`

const Desc = styled.p`
        font-size: 15px;

`

const Price = styled.div`
        align-items: center;
        margin: 10px;
        .arrow{
            margin-left: 15px;
        }
`
const More = styled.div`
       display: flex;
       justify-content: center;
       color: dodgerblue;
       align-items: center;

`

function Stocks(){
    return(
        <Container>
            <Heading>
                <Title>Products</Title>
                <Icon>
                    <MoreHorizOutlined />
                </Icon>
            </Heading>
            <Main>
                <Company> 
                    Bajaj Finery
                    <Desc style={{color:"green"}} className='profit'>10% Profit</Desc>
                </Company>
                <Price>
                    $1839.00
                    <KeyboardArrowUp className='arrow' style={{color:"green"}} />
                </Price>
            </Main>
            <Main>
                <Company> 
                    TTML
                    <Desc style={{color:"red"}} className='loss'>10% Loss</Desc>
                </Company>
                <Price>
                    $100.00
                    <KeyboardArrowDown className='arrow' style={{color:"red"}} />
                </Price>
            </Main>
            <Main>
                <Company> 
                    Reliance
                    <Desc style={{color:"green"}} className='profit'>10% Profit</Desc>
                </Company>
                <Price>
                    $200.00
                    <KeyboardArrowUp className='arrow' style={{color:"green"}} />
                </Price>
            </Main>
            <Main>
                <Company> 
                    TTML
                    <Desc style={{color:"red"}} className='loss'>10% Loss</Desc>
                </Company>
                <Price>
                    $189.00
                    <KeyboardArrowDown className='arrow' style={{color:"red"}} />
                </Price>
            </Main>
            <Main>
                <Company> 
                    Stolon
                    <Desc style={{color:"red"}} className='loss'>10% Loss</Desc>
                </Company>
                <Price>
                    $189.00
                    <KeyboardArrowDown className='arrow' style={{color:"red"}}  />
                </Price>
            </Main>
            <More>View More
            <ChevronRight />
            </More>
        </Container>
    )

}

export default Stocks;