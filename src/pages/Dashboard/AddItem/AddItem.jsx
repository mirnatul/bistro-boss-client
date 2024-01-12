import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                        <select {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Deserts</option>
                            <option>Drinks</option>
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
                    <textarea name='recipe' {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
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