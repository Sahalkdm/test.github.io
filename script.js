fetch('./q6-data.json').then((datas)=>{
    //console.log(datas);
    return datas.json();
}).then((completeDatas)=>{
    console.log(completeDatas);
    let data="";
    const size=completeDatas.results.slice(0,9)
    size.map((value)=>{
        data+=`<div class="item1" data-aos="flip-up"
        data-aos-duration="1000">
        <div style="text-align:center;font-size: 22px;">
        <h3>Personal Details</h3>
      </div>
        <div class="arrange">
        
        
        <table class="table">
          <tr>
              <td class="td">Name</td>
              <td class="td">:${value.name}</td>
          </tr>
          <tr>
          <td class="td">Height</td>
          <td class="td">:${value.height} cm</td>
          </tr>
          <tr>
              <td class="td">Mass</td>
              <td class="td">:${value.mass} kg</td>
          </tr>
          <tr>
            <td class="td">Gender</td>
            <td class="td">:${value.gender}</td>
        </tr>
        <tr>
          <td class="td">Birth Year</td>
          <td class="td">:${value.birth_year}</td>
      </tr>
    </table>
    </div>
    </div>`
    });
    document.getElementById("grid-container").innerHTML=data;
}).catch((err)=>{
    console.log(err)
})
AOS.init();



