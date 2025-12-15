import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface About {
    id: number;
    bio: string;
    projects_built: number;
    years_coding: number;
    learner_mindset: string;
}

interface Props {
    about: About;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Edit About',
        href: '#',
    },
];

export default function Edit({ about }: Props) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        bio: about.bio || '',
        projects_built: about.projects_built || 0,
        years_coding: about.years_coding || 0,
        learner_mindset: about.learner_mindset || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/about/${about.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit About - ${about.id}`} />
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
                        <label htmlFor="bio" className="block mb-2">Bio</label>
                        <textarea
                            id="bio"
                            value={data.bio}
                            onChange={(e) => setData('bio', e.target.value)}
                            className="w-full p-2 border rounded"
                            rows={4}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="projects_built" className="block mb-2">Projects Built</label>
                        <Input
                            type="number"
                            id="projects_built"
                            value={data.projects_built}
                            onChange={(e) => setData('projects_built', parseInt(e.target.value) || 0)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="years_coding" className="block mb-2">Years Coding</label>
                        <Input
                            type="number"
                            id="years_coding"
                            value={data.years_coding}
                            onChange={(e) => setData('years_coding', parseInt(e.target.value) || 0)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="learner_mindset" className="block mb-2">Learner Mindset</label>
                        <Input
                            type="text"
                            id="learner_mindset"
                            value={data.learner_mindset}
                            onChange={(e) => setData('learner_mindset', e.target.value)}
                        />
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