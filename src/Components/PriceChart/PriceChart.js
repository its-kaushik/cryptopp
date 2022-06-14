import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const PriceChart = ({ spark }) => {
  
  if( typeof spark != 'undefined'){

    let data = [] ;

    for( let i=0 ; i<spark.length ; i++ ){
      let value = {
        "price": spark[i]
      }
      data.push(value) ;
    }

    const max = (+Math.max(...spark) + Math.max(...spark)/100).toFixed(2);
    const min = (Math.min(...spark)  - Math.min(...spark)/50).toFixed(2);

    console.log(data)
    console.log(min)
    console.log(max)

      return(
        <div>
            <AreaChart width={730} height={250} data={data} className=" mx-auto "
              margin={{left:100}} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="85%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis tick={false} />
                <YAxis domain={[min, max]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    )

  }else{
    return(
      <h2>Loading....</h2>
    )
  }

}

export default PriceChart ;