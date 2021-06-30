import axios, { AxiosResponse } from 'axios';
import { ClinicType } from '../models/clinic.interface';

const instance = axios.create({
	baseURL: 'https://npin.cdc.gov/api/organization/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	//post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	//put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	//delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Clinic = {
	getClinicsByZip: (zip: string): Promise<ClinicType[]> => requests.get('proximity?prox[origin]=' + zip),
	//getAClinic: (id: number): Promise<ClinicType> => requests.get(`posts/${id}`),
	//createPost: (post: PostType): Promise<PostType> =>
	//	requests.post('posts', post),
	//updatePost: (post: PostType, id: number): Promise<PostType> =>
	//	requests.put(`posts/${id}`, post),
	//deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};