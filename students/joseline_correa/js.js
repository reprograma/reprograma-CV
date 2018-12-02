
const skills = ['HTML','CSS','SASS','BOOTSTRAP','JAVASCRIPT','REACT','VUE','PYTHON','Microsoft Access','MySQL','MongoDB','Microsoft Power BI','Tableu','Node.js','PHP','Microsoft Excel','Microsoft Access','Virtual Basic for Applications (VBA)','ArcGIS','Quantum GIS']


for (skill of skills){
    console.log(    
        `<div class="skill">
            <span class="skill-name">${skill}</span>
                <div class="points">
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                    <div class="point has-point"></div>
                </div>
        </div>`
    )
}
