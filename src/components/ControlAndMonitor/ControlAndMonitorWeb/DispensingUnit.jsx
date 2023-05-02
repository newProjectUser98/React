import React, { useEffect } from 'react'
import imgsvg from '../../../assets/images/dispensingunit.svg'
import { conductivity1svg, conductivity1svggray, conductivity1svgred } from '../../../data/DispensingUnitSVG/conductivity1'
import { conductivity2svg, conductivity2svggray, conductivity2svgred } from '../../../data/DispensingUnitSVG/conductivity2'
import { feedflowsensor1svg, feedflowsensor1svggray, feedflowsensor1svgred } from '../../../data/DispensingUnitSVG/feedflowsensor1'
import { feedflowsensor2svg, feedflowsensor2svggray, feedflowsensor2svgred } from '../../../data/DispensingUnitSVG/feedflowsensor2'
import { feedflowsensor3svg, feedflowsensor3svggray, feedflowsensor3svgred } from '../../../data/DispensingUnitSVG/feedflowsensor3'
import { feedflowsensor4svg, feedflowsensor4svggray, feedflowsensor4svgred } from '../../../data/DispensingUnitSVG/feedflowsensor4'
import { iotmodulesvg, iotmodulesvggray, iotmodulesvgred } from '../../../data/DispensingUnitSVG/iotmodule'
import { roipanelsvg, roipanelsvggray, roipanelsvgred } from '../../../data/DispensingUnitSVG/roipanel'
import { tap1svg } from '../../../data/DispensingUnitSVG/tap1'
import { tap2svg } from '../../../data/DispensingUnitSVG/tap2'
import { tap3svg } from '../../../data/DispensingUnitSVG/tap3'
import { tap4svg } from '../../../data/DispensingUnitSVG/tap4'
import { twtanksvg } from '../../../data/DispensingUnitSVG/twtank'

const DispensingUnit = ({proDetail,setProDetail,setProTitle}) => {
  useEffect(()=>{
    setTimeout(()=>{
      const objRef=document.querySelector('#dispensingsvg')
      const tanks = objRef.contentDocument.querySelector('#twtank')
      const conductivity1=objRef.contentDocument.querySelector('#conductivity1')
      const conductivity2 = objRef.contentDocument.querySelector('#conductivity2')
      const feedflowsensor1 = objRef.contentDocument.querySelector('#feedflowsensor1')
      const feedflowsensor2 = objRef.contentDocument.querySelector('#feedflowsensor2')
      const feedflowsensor3 = objRef.contentDocument.querySelector('#feedflowsensor3')
      const feedflowsensor4 = objRef.contentDocument.querySelector('#feedflowsensor4')
      const tap1 = objRef.contentDocument.querySelector('#tap1')
      const tap2 = objRef.contentDocument.querySelector('#tap2')
      const tap3 = objRef.contentDocument.querySelector('#tap3')
      const tap4 = objRef.contentDocument.querySelector('#tap4')
      
      const roipanel = objRef.contentDocument.querySelector('#roipanel')
      const iotmodule = objRef.contentDocument.querySelector('#iotmodule')
      
      //tanks.forEach(ob=>{
        tanks.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('left-tank')){
            arrow.value='rwp-arrows'
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
            setProTitle('')
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('left-tank')
            setProDetail(true)
            setProTitle('Treated Water Tank')
          }
          el.stopPropagation()
        })
      //})
      //conductivitytop.forEach(ob=>{
        // conductivity1.addEventListener('click', (el)=>{
        //   const arrow = document.querySelector('.rwp-arrows').classList;
        //   if(arrow.contains('conductivity-top')){
        //     arrow.value='rwp-arrows'
        //     setProTitle('')
        //     setProDetail(false)
        //     //ob.setAttribute('fill',"#1CA5B1")
        //   }else{
        //     //ob.setAttribute('fill',"#ff0000")
        //     arrow.value='rwp-arrows'
        //     arrow.add('conductivity-top')
        //     setProTitle('Conductivity 1')
        //     setProDetail(true)
        //   }
        //   el.stopPropagation()
        // })
      //})
      //conductivitybottom.forEach(ob=>{
        conductivity2.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('conductivity-bottom')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('conductivity-bottom')
            setProTitle('Conductivity 2')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //feedflowsensor1.forEach(ob=>{
        feedflowsensor1.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('feed-flow-sensor-1')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('feed-flow-sensor-1')
            setProTitle('Feed Flow Sensor 1')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //feedflowsensor2.forEach(ob=>{
        feedflowsensor2.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('feed-flow-sensor-2')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('feed-flow-sensor-2')
            setProTitle('Feed Flow Sensor 2')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //feedflowsensor3.forEach(ob=>{
        feedflowsensor3.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('feed-flow-sensor-3')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('feed-flow-sensor-3')
            setProTitle('Feed Flow Sensor 3')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //feedflowsensor4.forEach(ob=>{
        feedflowsensor4.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('feed-flow-sensor-4')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('feed-flow-sensor-4')
            setProTitle('Feed Flow Sensor 4')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //tap1.forEach(ob=>{
        tap1.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('tap-1')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('tap-1')
            setProTitle('Tap 1')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //tap2.forEach(ob=>{
        tap2.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('tap-2')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('tap-2')
            setProTitle('Tap 2')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //tap3.forEach(ob=>{
        tap3.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('tap-3')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('tap-3')
            setProTitle('Tap 3')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //tap4.forEach(ob=>{
        tap4.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('tap-4')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('tap-4')
            setProTitle('Tap 4')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      
      //roipanel.forEach(ob=>{
        roipanel.addEventListener('click', (el)=>{
          const arrow = document.querySelector('.rwp-arrows').classList;
          if(arrow.contains('roi-panel')){
            arrow.value='rwp-arrows'
            setProTitle('')
            setProDetail(false)
            //ob.setAttribute('fill',"#1CA5B1")
          }else{
            //ob.setAttribute('fill',"#ff0000")
            arrow.value='rwp-arrows'
            arrow.add('roi-panel')
            setProTitle('Water ATM')
            setProDetail(true)
          }
          el.stopPropagation()
        })
      //})
      //iotmodule.forEach(ob=>{
        // iotmodule.addEventListener('click', (el)=>{
        //   const arrow = document.querySelector('.rwp-arrows').classList;
        //   if(arrow.contains('iotmodule')){
        //     arrow.value='rwp-arrows'
        //     setProTitle('')
        //     setProDetail(false)
        //     //ob.setAttribute('fill',"#1CA5B1")
        //   }else{
        //     //ob.setAttribute('fill',"#ff0000")
        //     arrow.value='rwp-arrows'
        //     arrow.add('iotmodule')
        //     setProTitle('IOT')
        //     setProDetail(true)
        //   }
        //   el.stopPropagation()
        // })
      //})
      

    },5000)
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      const objRef=document.querySelector('#dispensingsvg')
      const conductivity1 = objRef.contentDocument.querySelector('#conductivity1')
      const twtank = objRef.contentDocument.querySelector('#twtank')
      const conductivity2 = objRef.contentDocument.querySelector('#conductivity2')
      const feedflowsensor1 = objRef.contentDocument.querySelector('#feedflowsensor1')
      const feedflowsensor2 = objRef.contentDocument.querySelector('#feedflowsensor2')
      const feedflowsensor3 = objRef.contentDocument.querySelector('#feedflowsensor3')
      const feedflowsensor4 = objRef.contentDocument.querySelector('#feedflowsensor4')
      const tap1 = objRef.contentDocument.querySelector('#tap1')
      const tap2 = objRef.contentDocument.querySelector('#tap2')
      const tap3 = objRef.contentDocument.querySelector('#tap3')
      const tap4 = objRef.contentDocument.querySelector('#tap4')
      const roipanel = objRef.contentDocument.querySelector('#roipanel')
      const iotmodule = objRef.contentDocument.querySelector('#iotmodule')

      conductivity1.innerHTML = conductivity1svg
      twtank.innerHTML = twtanksvg
      conductivity2.innerHTML = conductivity2svg
      feedflowsensor1.innerHTML = feedflowsensor1svg
      feedflowsensor2.innerHTML = feedflowsensor2svg
      feedflowsensor3.innerHTML = feedflowsensor3svg
      feedflowsensor4.innerHTML = feedflowsensor4svg
      tap1.innerHTML = tap1svg
      tap2.innerHTML = tap2svg
      tap3.innerHTML = tap3svg
      tap4.innerHTML = tap4svg
      roipanel.innerHTML = roipanelsvg
      iotmodule.innerHTML = iotmodulesvg
      
    },1000)
  },[])
  return (
    <div className='w-full py-12 flex'>
      <object id="dispensingsvg"  data={imgsvg} type="image/svg+xml" style={{width:'50vw'}}>
      </object>
      <div className="rwp-arrows">
      {
        proDetail &&
          // <img src={arrow} alt="" className='h-full'/>
          <div className="triangle"></div>
      }
      </div>
    </div>
  )
}

export default DispensingUnit