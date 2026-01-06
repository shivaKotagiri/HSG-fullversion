"use client";

import { useState } from "react";
import { 
  AlertCircle, 
  Droplets, 
  Mail, 
  Phone, 
  Pencil, 
  Trash2, 
  X, 
  Save,
  Loader2 // Imported a loader icon
} from "lucide-react";
import { useRouter } from "next/navigation";

export interface Student {
  id: string;
  name: string;
  roll: string;
  email: string;
  phone: string;
  bloodGroup: string;
  healthIssues: boolean;
  healthDetails?: string;
  fatherName: string;
  motherName: string;
}

interface DirectoryProps {
  students: Student[];
  onDelete: (id: string) => Promise<void> | void; // Allow async
  onUpdate: (updatedStudent: Student) => Promise<void> | void; // Allow async
}

export default function StudentDirectory({ students, onDelete, onUpdate }: DirectoryProps) {
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isSaving, setIsSaving] = useState(false); // New loading state
  const router = useRouter();

  const hasStudents = students.length > 0;

  // Handle opening the modal
  const handleEditClick = (student: Student) => {
    setEditingStudent({ ...student });
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setEditingStudent(null);
    setIsSaving(false);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (!editingStudent) return;
    
    const { name, value, type } = e.target;
    
    setEditingStudent((prev) => {
      if (!prev) return null;
      
      if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        return { ...prev, [name]: checked };
      }

      return { ...prev, [name]: value };
    });
  };

  // FIXED: Handle saving asynchronously
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;

    try {
      setIsSaving(true);
      
      // 1. Wait for the server action to complete
      await onUpdate(editingStudent);
      
      // 2. Close the modal
      handleCloseModal();
      
      // 3. Refresh the UI to show new data
      router.refresh();
      
    } catch (error) {
      console.error("Failed to update student:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteClick = async (student: Student) => {
    if(window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      await onDelete(student.id);
      router.refresh();
    }
  }

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-white">
          <h3 className="text-lg font-bold text-slate-900">Student Directory</h3>
          <p className="text-slate-500 text-sm">Contact and health information</p>
        </div>

        {!hasStudents ? (
          <div className="py-16 text-center text-slate-400 text-sm">
            No students found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-gray-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Identity</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Parent Details</th>
                  <th className="px-6 py-4">Medical</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    {/* Identity */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">
                        {student.name}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {student.roll}
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <a href={`mailto:${student.email}`} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                          <Mail className="w-3.5 h-3.5 text-indigo-400" />
                          {student.email}
                        </a>
                        <a href={`tel:${student.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                          <Phone className="w-3.5 h-3.5 text-indigo-400" />
                          {student.phone}
                        </a>
                      </div>
                    </td>

                    {/* Parent Details */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="flex items-center gap-2 text-slate-600">
                          <span className="text-slate-400 text-xs uppercase">F:</span>
                          {student.fatherName}
                        </span>
                        <span className="flex items-center gap-2 text-slate-600">
                          <span className="text-slate-400 text-xs uppercase">M:</span> 
                          {student.motherName}
                        </span>
                      </div>
                    </td>

                    {/* Medical */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                          <Droplets className="w-3 h-3 text-rose-500" />
                          {student.bloodGroup}
                        </span>

                        {student.healthIssues && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200" title={student.healthDetails}>
                            <AlertCircle className="w-3 h-3" />
                            Issue
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleEditClick(student)}
                          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                          title="Edit Student"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(student)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                          title="Delete Student"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-slate-800">Edit Student Information</h3>
              <button 
                onClick={handleCloseModal}
                disabled={isSaving}
                className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Added onSubmit to form */}
            <form onSubmit={handleSave} className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Identity Section */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 text-sm border-b pb-2">Identity</h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                    <input type="text" name="name" value={editingStudent.name} onChange={handleInputChange} className="text-neutral-600 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Roll Number</label>
                    <input type="text" name="roll" value={editingStudent.roll} onChange={handleInputChange} className="text-neutral-600 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                </div>

                {/* Contact Section */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 text-sm border-b pb-2">Contact</h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Email Address</label>
                    <input type="email" name="email" value={editingStudent.email} onChange={handleInputChange} className="w-full px-3 py-2 text-neutral-600 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={editingStudent.phone} onChange={handleInputChange} className="w-full px-3 py-2 text-neutral-600 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                </div>

                {/* Parent Section */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 text-sm border-b pb-2">Parents</h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Father&apos;s Name</label>
                    <input type="text" name="fatherName" value={editingStudent.fatherName} onChange={handleInputChange} className="text-neutral-600 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Mother&apos;s Name</label>
                    <input type="text" name="motherName" value={editingStudent.motherName} onChange={handleInputChange} className="text-neutral-600 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                  </div>
                </div>

                {/* Medical Section */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 text-sm border-b pb-2">Medical</h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Blood Group</label>
                    <select name="bloodGroup" value={editingStudent.bloodGroup} onChange={handleInputChange} className="w-full px-3 text-neutral-600 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input type="checkbox" id="healthIssues" name="healthIssues" checked={editingStudent.healthIssues} onChange={handleInputChange} className="w-4 h-4 text-indigo-600 cursor-pointer border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="healthIssues" className="text-sm cursor-pointer text-slate-700">Has Health Issues?</label>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSaving}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-200 disabled:bg-indigo-400"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}