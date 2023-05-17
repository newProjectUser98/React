import React, { useEffect } from 'react'
import imgsvg from '../../../assets/images/watertreatment.svg'
import { rawtank } from '../../../data/WaterTreatmentUnitSVG/rawtank'
import { rwpmotor } from '../../../data/WaterTreatmentUnitSVG/motor'
import { feedflowsensor } from '../../../data/WaterTreatmentUnitSVG/feedflowsensor'
import { ampv1svg } from '../../../data/WaterTreatmentUnitSVG/ampv1'
import { ampv2svg } from '../../../data/WaterTreatmentUnitSVG/ampv2'
import { filterbig1svg } from '../../../data/WaterTreatmentUnitSVG/filterbig1'
import { filterbig2svg } from '../../../data/WaterTreatmentUnitSVG/filterbig2'
import { dosingpumpsvg } from '../../../data/WaterTreatmentUnitSVG/dosingpump'
import { filtersmall1svg } from '../../../data/WaterTreatmentUnitSVG/filtersmall1'
import { filtersmall2svg } from '../../../data/WaterTreatmentUnitSVG/filtersmall2'
import { iotmodulesvg } from '../../../data/WaterTreatmentUnitSVG/iotmodule'
import { lpsrangesvg } from '../../../data/WaterTreatmentUnitSVG/lpsrange'
import { hpprangesvg } from '../../../data/WaterTreatmentUnitSVG/hpprange'
import { roipanelsvg } from '../../../data/WaterTreatmentUnitSVG/roipanel'
import { hpsrangesvg } from '../../../data/WaterTreatmentUnitSVG/hpsrange'
import { membranesvg } from '../../../data/WaterTreatmentUnitSVG/membrane'
import { premeateflowsensorsvg } from '../../../data/WaterTreatmentUnitSVG/premeateflowsensor'
import { cunductivitysvg } from '../../../data/WaterTreatmentUnitSVG/cunductivity'
import { tankrightsvg } from '../../../data/WaterTreatmentUnitSVG/tankright'

const WaterTreatmentUnit = ({ proDetail, setProDetail, setProTitle }) => {
  useEffect(() => {
    setTimeout(() => {
      const objRef = document.querySelector('#watersvg')
      //const tanks=objRef.contentDocument.querySelectorAll('.tank-left')
      const tanks = objRef.contentDocument.querySelector('#rawtank')
      const rwpmotor = objRef.contentDocument.querySelector('#rwp_motor')
      const feedflowsensor = objRef.contentDocument.querySelector('#feed_flow_sensor')
      const ampv1 = objRef.contentDocument.querySelector('#ampv1')
      const ampv2 = objRef.contentDocument.querySelector('#ampv2')
      // eslint-disable-next-line 
      const filterbig1 = objRef.contentDocument.querySelector('#filter_big1')
      // eslint-disable-next-line 
      const filterbig2 = objRef.contentDocument.querySelector('#filter_big2')
      // eslint-disable-next-line 
      const dosingpump = objRef.contentDocument.querySelector('#dosingpump')
      // eslint-disable-next-line 
      const filter_small1 = objRef.contentDocument.querySelector('#filter_small1')
      // eslint-disable-next-line 
      const filter_small2 = objRef.contentDocument.querySelector('#filter_small2')
      // eslint-disable-next-line 
      const iotmodule = objRef.contentDocument.querySelector('#iotmodule')
      const lps_range = objRef.contentDocument.querySelector('#lps_range')
      const hpp_range = objRef.contentDocument.querySelector('#hpp_range')
      const roi_panel = objRef.contentDocument.querySelector('#roi_panel')
      const hps_range = objRef.contentDocument.querySelector('#hps_range')
      // eslint-disable-next-line 
      const membrane = objRef.contentDocument.querySelector('#membrane')
      const premeate_flow_sensor = objRef.contentDocument.querySelector('#premeate_flow_sensor')
      const cunductivity = objRef.contentDocument.querySelector('#cunductivity')
      const tank_right = objRef.contentDocument.querySelector('#tank_right')

      // const rwpmotor=objRef.contentDocument.querySelectorAll('.rwp-motor')
      // const feedflowsensor = objRef.contentDocument.querySelectorAll('.feed-flow-sensor')
      //const ampv1 = objRef.contentDocument.querySelectorAll('.ampv1')
      //const ampv2 = objRef.contentDocument.querySelectorAll('.ampv2')
      //const filterbig1 = objRef.contentDocument.querySelectorAll('.filter-big1')
      //const filterbig2 = objRef.contentDocument.querySelectorAll('.filter-big2')
      //const dosingpump = objRef.contentDocument.querySelectorAll('.dosing-pump')
      // eslint-disable-next-line 
      const roipanel = objRef.contentDocument.querySelectorAll('.roi-panel')
      //const iotmodule = objRef.contentDocument.querySelectorAll('.iot-module')
      // eslint-disable-next-line 
      const filtersmall1 = objRef.contentDocument.querySelectorAll('.filter-small1')
      // eslint-disable-next-line 
      const filtersmall2 = objRef.contentDocument.querySelectorAll('.filter-small2')
      // eslint-disable-next-line 
      const lpsrange = objRef.contentDocument.querySelectorAll('.lps-range')
      // eslint-disable-next-line 
      const hpprange = objRef.contentDocument.querySelectorAll('.hpp-range')
      // eslint-disable-next-line 
      const hpsrange = objRef.contentDocument.querySelectorAll('.hps-range')
      //const membrane = objRef.contentDocument.querySelectorAll('.membrane')
      // eslint-disable-next-line 
      const premeateflowsensor = objRef.contentDocument.querySelectorAll('.premeate-flow-sensor')
      //const cunductivity = objRef.contentDocument.querySelectorAll('.cunductivity')
      // eslint-disable-next-line 
      const tankright = objRef.contentDocument.querySelectorAll('.tank-right')

      //tanks.forEach(ob=>{
      tanks.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('tank-left')) {
          arrow.value = 'rwp-arrows'
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
          setProTitle('')
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('tank-left')
          setProDetail(true)
          setProTitle('Raw Water Tank')
        }
        el.stopPropagation()
      })
      //})
      //rwpmotor.forEach(ob=>{
      rwpmotor.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('rwp-motor')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('rwp-motor')
          setProTitle('RWP')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //feedflowsensor.forEach(ob=>{
      feedflowsensor.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('feed-flow-sensor')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('feed-flow-sensor')
          setProTitle('Feed Flow Sensor')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //ampv1.forEach(ob=>{
      ampv1.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('ampv1')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('ampv1')
          setProTitle('Ampv1')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //ampv2.forEach(ob=>{
      ampv2.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('ampv2')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('ampv2')
          setProTitle('Ampv2')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //filterbig1.forEach(ob=>{
      // filterbig1.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('filterbig1')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('filterbig1')
      //     setProTitle('Filter Big 1')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //filterbig2.forEach(ob=>{
      // filterbig2.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('filterbig2')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('filterbig2')
      //     setProTitle('Filter Big 2')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //dosingpump.forEach(ob=>{
      // dosingpump.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('dosingpump')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('dosingpump')
      //     setProTitle('Dosing Pump')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //roipanel.forEach(ob=>{
      roi_panel.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('roipanel')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('roipanel')
          setProTitle('ROI Panel')
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
      //     setProTitle('IOT Module')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //filtersmall1.forEach(ob=>{
      // filter_small1.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('filtersmall1')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('filtersmall1')
      //     setProTitle('Filter Small 1')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //filtersmall2.forEach(ob=>{
      // filter_small2.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('filtersmall2')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('filtersmall2')
      //     setProTitle('Filter Small 2')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //lpsrange.forEach(ob=>{
      lps_range.addEventListener('click', (el) => {
        console.log('click ok', el);
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('lpsrange')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('lpsrange')
          setProTitle('LPS Range')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //hpprange.forEach(ob=>{
      hpp_range.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('hpprange')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('hpprange')
          setProTitle('HPP Range')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //hpsrange.forEach(ob=>{
      hps_range.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('hpsrange')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('hpsrange')
          setProTitle('HPS Range')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //membrane.forEach(ob=>{
      // membrane.addEventListener('click', (el)=>{
      //   const arrow = document.querySelector('.rwp-arrows').classList;
      //   if(arrow.contains('membrane')){
      //     arrow.value='rwp-arrows'
      //     setProTitle('')
      //     setProDetail(false)
      //     //ob.setAttribute('fill',"#1CA5B1")
      //   }else{
      //     //ob.setAttribute('fill',"#ff0000")
      //     arrow.value='rwp-arrows'
      //     arrow.add('membrane')
      //     setProTitle('Membrane')
      //     setProDetail(true)
      //   }
      //   el.stopPropagation()
      // })
      //})
      //premeateflowsensor.forEach(ob=>{
      premeate_flow_sensor.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('premeateflowsensor')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('premeateflowsensor')
          setProTitle('Premeate Flow Sensor')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //cunductivity.forEach(ob=>{
      cunductivity.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('cunductivity')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('cunductivity')
          setProTitle('Conductivity')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})
      //tankright.forEach(ob=>{
      tank_right.addEventListener('click', (el) => {
        const arrow = document.querySelector('.rwp-arrows').classList;
        if (arrow.contains('tankright')) {
          arrow.value = 'rwp-arrows'
          setProTitle('')
          setProDetail(false)
          //ob.setAttribute('fill',"#1CA5B1")
        } else {
          //ob.setAttribute('fill',"#ff0000")
          arrow.value = 'rwp-arrows'
          arrow.add('tankright')
          setProTitle('Treated Water Tank')
          setProDetail(true)
        }
        el.stopPropagation()
      })
      //})

    }, 5000)
  },
  // eslint-disable-next-line 
  [])

  useEffect(() => {
    setTimeout(() => {
      const objRef = document.querySelector('#watersvg')
      const rawtanks = objRef.contentDocument.querySelector('#rawtank')
      const rwp_motor = objRef.contentDocument.querySelector('#rwp_motor')
      const feed_flow_sensor = objRef.contentDocument.querySelector('#feed_flow_sensor')
      const ampv1 = objRef.contentDocument.querySelector('#ampv1')
      const ampv2 = objRef.contentDocument.querySelector('#ampv2')
      const filter_big1 = objRef.contentDocument.querySelector('#filter_big1')
      const filter_big2 = objRef.contentDocument.querySelector('#filter_big2')
      const dosingpump = objRef.contentDocument.querySelector('#dosingpump')
      const filter_small1 = objRef.contentDocument.querySelector('#filter_small1')
      const filter_small2 = objRef.contentDocument.querySelector('#filter_small2')
      const iotmodule = objRef.contentDocument.querySelector('#iotmodule')
      const lps_range = objRef.contentDocument.querySelector('#lps_range')
      const hpp_range = objRef.contentDocument.querySelector('#hpp_range')
      const roi_panel = objRef.contentDocument.querySelector('#roi_panel')
      const hps_range = objRef.contentDocument.querySelector('#hps_range')
      const membrane = objRef.contentDocument.querySelector('#membrane')
      const premeate_flow_sensor = objRef.contentDocument.querySelector('#premeate_flow_sensor')
      const cunductivity = objRef.contentDocument.querySelector('#cunductivity')
      const tank_right = objRef.contentDocument.querySelector('#tank_right')

      rawtanks.innerHTML = rawtank
      rwp_motor.innerHTML = rwpmotor
      feed_flow_sensor.innerHTML = feedflowsensor
      ampv1.innerHTML = ampv1svg
      ampv2.innerHTML = ampv2svg
      filter_big1.innerHTML = filterbig1svg
      filter_big2.innerHTML = filterbig2svg
      dosingpump.innerHTML = dosingpumpsvg
      filter_small1.innerHTML = filtersmall1svg
      filter_small2.innerHTML = filtersmall2svg
      iotmodule.innerHTML = iotmodulesvg
      lps_range.innerHTML = lpsrangesvg
      hpp_range.innerHTML = hpprangesvg
      roi_panel.innerHTML = roipanelsvg
      hps_range.innerHTML = hpsrangesvg
      membrane.innerHTML = membranesvg
      premeate_flow_sensor.innerHTML = premeateflowsensorsvg
      cunductivity.innerHTML = cunductivitysvg
      tank_right.innerHTML = tankrightsvg

    }, 1000)
  }, [])
  return (
    <div className='w-full py-12'>
      <object id="watersvg" data={imgsvg} type="image/svg+xml">
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

export default WaterTreatmentUnit