import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

interface EducationFormData {
    jurusan: string;
    institusi: string;
    deskripsi: string;
    start_year: number;
    end_year: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Education',
        href: '/education',
    },
    {
        title: 'Create Education',
        href: '#',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<EducationFormData>({
        jurusan: '',
        institusi: '',
        deskripsi: '',
        start_year: new Date().getFullYear(),
        end_year: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/education');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Education" />
            <div className='w-8/12 p-4 mx-auto'>
                <form onSubmit={handleSubmit}>
                    {errors && Object.keys(errors).length > 0 && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>
                                <ul className="list-disc pl-5">
                                    {Object.entries(errors).map(([key, value]) => (
                                        <li key={key}>{value}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="mb-4">
                        <label htmlFor="jurusan" className="block mb-2">Jurusan</label>
                        <Input
                            type="text"
                            id="jurusan"
                            value={data.jurusan}
                            onChange={(e) => setData('jurusan', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="institusi" className="block mb-2">Institusi</label>
                        <Input
                            type="text"
                            id="institusi"
                            value={data.institusi}
                            onChange={(e) => setData('institusi', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="deskripsi" className="block mb-2">Deskripsi</label>
                        <Textarea
                            id="deskripsi"
                            value={data.deskripsi}
                            onChange={(e) => setData('deskripsi', e.target.value)}
                            rows={4}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="start_year" className="block mb-2">Start Year</label>
                            <Input
                                type="number"
                                id="start_year"
                                min={1900}
                                max={new Date().getFullYear() + 10}
                                value={data.start_year}
                                onChange={(e) => setData('start_year', parseInt(e.target.value) || new Date().getFullYear())}
                            />
                        </div>
                        <div>
                            <label htmlFor="end_year" className="block mb-2">End Year</label>
                            <Input
                                type="number"
                                id="end_year"
                                min={1900}
                                max={new Date().getFullYear() + 10}
                                value={data.end_year}
                                onChange={(e) => setData('end_year', e.target.value)}
                                placeholder="Leave blank for present"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>Create</Button>
                        <Button type="button" variant="secondary" onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}