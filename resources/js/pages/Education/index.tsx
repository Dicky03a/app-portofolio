import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ educations }: any) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<any>(null);

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        reset,
        processing,
        errors,
    } = useForm({
        jurusan: '',
        institusi: '',
        deskripsi: '',
        start_year: '',
        end_year: '',
    });

    const openCreate = () => {
        reset();
        setEditing(null);
        setOpen(true);
    };

    const openEdit = (education: any) => {
        setEditing(education);
        setData({
            jurusan: education.jurusan,
            institusi: education.institusi,
            deskripsi: education.deskripsi ?? '',
            start_year: education.start_year,
            end_year: education.end_year ?? '',
        });
        setOpen(true);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const action = editing ? put(route('education.update', editing.id)) : post(route('education.store'));

        action?.({
            preserveScroll: true,
            onSuccess: () => {
                setOpen(false);
                reset();
                setEditing(null);
            },
        });
    };

    return (
        <AppLayout>
            <Head title="Education" />

            {/* BUTTON ADD */}
            <div className="m-4">
                <Button onClick={openCreate}>Add Education</Button>
            </div>

            {/* LIST DATA */}
            <div className="m-4 space-y-2">
                <div className="m-4 rounded border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Jurusan</TableHead>
                                <TableHead>Institusi</TableHead>
                                <TableHead>Tahun</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {educations.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                                        Belum ada data education
                                    </TableCell>
                                </TableRow>
                            )}

                            {educations.map((edu: any) => (
                                <TableRow key={edu.id}>
                                    <TableCell className="font-medium">{edu.jurusan}</TableCell>

                                    <TableCell>{edu.institusi}</TableCell>

                                    <TableCell>
                                        {edu.start_year} – {edu.end_year ?? 'Present'}
                                    </TableCell>

                                    <TableCell className="space-x-2 text-right">
                                        <Button size="sm" variant="outline" onClick={() => openEdit(edu)}>
                                            Edit
                                        </Button>

                                        <Button size="sm" variant="destructive" onClick={() => destroy(route('education.destroy', edu.id))}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* MODAL CREATE & EDIT */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editing ? 'Edit Education' : 'Add Education'}</DialogTitle>
                        <DialogDescription>Isi data pendidikan</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label>Jurusan</Label>
                            <Input value={data.jurusan} onChange={(e) => setData('jurusan', e.target.value)} />
                        </div>

                        <div>
                            <Label>Institusi</Label>
                            <Input value={data.institusi} onChange={(e) => setData('institusi', e.target.value)} />
                        </div>

                        <div>
                            <Label>Deskripsi</Label>
                            <Textarea value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="number"
                                placeholder="Start Year"
                                value={data.start_year}
                                onChange={(e) => setData('start_year', e.target.value)}
                            />
                            <Input type="number" placeholder="End Year" value={data.end_year} onChange={(e) => setData('end_year', e.target.value)} />
                        </div>

                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
