import Linecomp from '../Linecomp'

const Line = ({ lines }) => {
    return (
        lines.map( line => {
            return <Linecomp key={line.id} line={line} />
        })
    );
  };
  
  export default Line;