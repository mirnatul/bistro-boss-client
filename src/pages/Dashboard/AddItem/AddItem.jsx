import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token
import useAxiosSecure from './../../../hooks/useAxiosSecure';


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        // console.log(data)
        // console.log(img_hosting_token);

        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // const menuItem = data;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    // console.log(newItem);
                    // menuItem.image = imgURL;
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data);
                            if (data.data.insertedId) {
                                reset()
                                alert("Menu added successfully")
                            }
                        })
                }
            })
    };
    return (
        <div onSubmit={handleSubmit(onSubmit)} className='w-full px-10'>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>
            <form>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Recipe name*</span>
                    </div>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />
                </label>
                <div className='flex gap-4 my-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>deserts</option>
                            <option>desi</option>
                            <option>drinks</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input name='price' type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe details*</span>
                    </div>
                    <textarea name='recipe' {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                </label>
                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text">Item Image</span>
                    </div>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </label>
                <input className='btn my-3 btn-warning' type="submit" value="Add Item"></input>
            </form>
        </div>
    );
};

export default AddItem;