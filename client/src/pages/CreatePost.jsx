import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from'../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',   
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
  }
  const handleChange = async (e) => {
  }
  const handleSurpriseMe = () => {

  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <FormField
          labelName="Your Name"
          type="text"
          name="name"
          placeholder="Ex., john doe"
          value={form.name}
          handleChange={handleChange}
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />
      </div>
        </form>

      </section>
  )
}

export default CreatePost