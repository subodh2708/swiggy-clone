function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-semibold m-4">Contact Us</h1>
      <input
        type="text"
        placeholder="name"
        className="border border-black m-2 px-2 py-1 rounded-md"
      />
      <input
        type="text"
        placeholder="message"
        className="border border-black m-2 px-2 py-1 rounded-md"
      />
      <button className="bg-black text-xl text-white px-2 py-1 rounded-lg ">
        Submit
      </button>
    </div>
  );
}

export default Contact;
