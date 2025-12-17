import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

interface Education {
    id: number;
    jurusan: string;
    institusi: string;
    deskripsi?: string | null;
    start_year: number;
    end_year?: number | null;
}

interface Props {
    education: Education;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Education',
        href: '/education',
    },
    {
        title: 'Edit Education',
        href: '#',
    },
];

export default function Edit({ education }: Props) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        jurusan: education.jurusan || '',
        institusi: education.institusi || '',
        deskripsi: education.deskripsi || '',
        start_year: education.start_year || 0,
        end_year: education.end_year || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/education/${education.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Education - ${education.id}`} />
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
                                onChange={(e) => setData('start_year', parseInt(e.target.value) || 0)}
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
                                onChange={(e) => setData('end_year', e.target.value ? parseInt(e.target.value) || 0 : '')}
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>Update</Button>
                        <Button type="button" variant="secondary" onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}