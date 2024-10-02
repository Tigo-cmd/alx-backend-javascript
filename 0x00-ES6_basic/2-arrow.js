export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighboorhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighboorhood);
    return self.sanFranciscoNeighborhoods;
  };
}
