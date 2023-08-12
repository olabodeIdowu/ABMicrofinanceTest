export default function Filter() {
  return (
    <form id='filter-form'>
      <input type='text' placeholder='Where to?' />
      <select>
        <option>Travel Type</option>
      </select>
      <select>
        <option>Duration</option>
      </select>
      <button className='btn'>Submit</button>
    </form>
  );
}
