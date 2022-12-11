const tooltip = document.getElementById("tooltip")

let basetemp = undefined
const colors = ['rgb(89, 117, 180)', 'rgb(171, 173, 233)', 'rgb(253, 174, 97', 'rgb(165, 0, 38)']

function getTemperatureFrom(temp){



}



fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json")
    .then(res => res.json())
    .then(res =>{
        const {baseTemperature, monthlyVariance} = res
        
        createStuff(monthlyVariance.map(d =>({
            ...d,
            temp: baseTemp - d.variance})));

        
})


createStuff(data.map(d => [d[0], d[1]]))
function  createStuff(data){
    const width = 800
    const height = 400
    const cellheight = (height - (padding * 2))/ 12
   
        const yScale  = scaleLinear()
            .domain([0, 11])
            .range([height - padding, padding])

        const xScale = scaleTime()
            .domain([d3.min(data, d=> d.year), d3.max(data, d=>d.year)])
            .range([padding, width - padding])


        const tempScale = D3.scalelinear()
            .domain([d3.min(data, d=>d.temp), d3.max(data, d=>d.temp)])
            .range(0, 3)
        

        const svg = d3.select('#container').append('svg')
                    .attr('width', width)
                    .attr('height', height)


        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'))
        const yAxis = d3.axisLeft(yScale).tickFormat((month) =>{
            const date = new Date(0)
            data.setUTCMonth(month)
            
            return d3.timeFormat.utc('%B')(date)
            
    })

        data.year, data.month,  data.temp

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'cell')
            .attr('data-month', d => d.month)
            .attr('data-year', d =>d.year)
            .attr('data-temp', d=>d.temp)
            .attr('x', d =>xScale(d.year))
            .attr('y', d=>yScale(d.month -1))
            .attr('width', cellwidth)
            .attr('height', cellheight)
            .attr('fill', d =>{
                return colors[Math.floor(tempScale(d.temp))]
            })

           .on('mouseover', (d, i) =>{
                tooltip.classList.add('show') 
                tooltip.style.left = xScale(d.year) + 'px'
                tooltip.style.top = yScale(d.month - 1) + 'px'

                tooltip.innerHTML = `
                    <p> ${d.year} - ${d.month}</p>
                    <p> ${d.temp} </p>
                
                `;
            }).on('mouseout', () =>{

                tooltip.classList.remove('show')

            })

            const legend = d3.select(body)
                .append('svg')
                .attr('width', 200)
                .attr('height', )
                .selectAll('rect')
                .data('colors')
                .enter()
                .append('rect')




            






















        svg.append('g')
            .attr('id', 'x-axis')
            .attr('transform', `translate(0, ${height - padding})`)
            .call(xAxis)
        svg.append('g')
        .attr('id', 'y-axis')
        .attr|('transform', `translate(${padding}, 0)`)
        .call(yAxis)
}




