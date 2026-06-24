import { X, Printer, Mail, Linkedin, MapPin, Award, BookOpen, Briefcase, Heart, Cpu } from 'lucide-react';
import { personalInfo, educationList, internshipList, projectsList, skillsList, certificationsList, leadershipList, languagesList } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      {/* Printable Area & Container */}
      <div 
        id="resume-modal-content"
        className="relative bg-white dark:bg-slate-950 w-full max-w-4xl rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors duration-300"
      >
        {/* Header Options - Hidden on Print */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 print:hidden">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600 dark:text-violet-400" />
            <span className="font-display font-semibold text-slate-800 dark:text-slate-100">Professional Resume</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              id="btn-print-resume"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              id="btn-close-resume"
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto flex-1 text-slate-800 dark:text-slate-300 print:p-0 print:overflow-visible print:bg-white print:text-black">
          <div id="resume-printable-area" className="print:block space-y-6">
            
            {/* 1. Header Section */}
            <div className="border-b-2 border-indigo-600 dark:border-violet-500 pb-5 text-center sm:text-left">
              <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white print:text-slate-900">
                {personalInfo.name}
              </h1>
              <p className="text-md font-medium text-indigo-600 dark:text-violet-400 print:text-indigo-600 mt-1 font-display">
                {personalInfo.title}
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 mt-4 text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 print:text-slate-500" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 print:text-slate-500" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 print:text-slate-500" />
                  <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">adari-ruchitha-453185353</a>
                </span>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 print:text-slate-700">
                {personalInfo.bio}
              </p>
            </div>

            {/* Grid for Education & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Left Column (2/3 width on print) - Experience & Education */}
              <div className="md:col-span-2 space-y-6">
                
                {/* 3. Internship Experience */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600 border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Internship Experience
                  </h2>
                  {internshipList.map((intern) => (
                    <div key={intern.id} className="space-y-1.5">
                      <div className="flex justify-between items-start text-sm">
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-white print:text-slate-900">{intern.role}</span>
                          <span className="text-slate-500 dark:text-slate-400"> at </span>
                          <span className="font-semibold text-indigo-600 dark:text-violet-400 print:text-indigo-600">{intern.company}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">{intern.period}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 print:text-slate-700">
                        {intern.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 4. Projects */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600 border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Key Academic Projects
                  </h2>
                  {projectsList.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex justify-between items-baseline text-sm">
                        <span className="font-semibold text-slate-800 dark:text-white print:text-slate-900">{proj.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Tech Stack: {proj.tech.join(', ')}
                      </p>
                      <ul className="list-disc pl-4 text-xs text-slate-600 dark:text-slate-300 print:text-slate-700">
                        {proj.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 5. Education */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600 border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Education Timeline
                  </h2>
                  <div className="space-y-3">
                    {educationList.map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <div className="flex justify-between font-semibold text-slate-800 dark:text-white print:text-slate-900">
                          <span>{edu.institution}</span>
                          <span className="font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">{edu.period}</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400 mt-0.5">
                          <span>{edu.degree}</span>
                          <span className="font-mono text-indigo-600 dark:text-violet-400 print:text-indigo-600 font-semibold">
                            {edu.gradeType}: {edu.grade}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (1/3 width on print) - Skills, Certifications, Languages */}
              <div className="space-y-6 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 md:pl-6 print:border-l print:pl-6">
                
                {/* 6. Skills */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600">
                    Core Skills
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 font-mono mb-1">Languages</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillsList.filter(s => s.category === 'programming').map(s => (
                          <span key={s.name} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded font-mono text-slate-700 dark:text-slate-300 print:bg-white print:border print:text-black">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 font-mono mb-1">Web</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillsList.filter(s => s.category === 'web').map(s => (
                          <span key={s.name} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded font-mono text-slate-700 dark:text-slate-300 print:bg-white print:border print:text-black">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 font-mono mb-1">Tools</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillsList.filter(s => s.category === 'tools').map(s => (
                          <span key={s.name} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded font-mono text-slate-700 dark:text-slate-300 print:bg-white print:border print:text-black">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Certifications */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Certifications
                  </h2>
                  <div className="space-y-2">
                    {certificationsList.map((cert) => (
                      <div key={cert.id} className="text-[11px] leading-snug">
                        <p className="font-semibold text-slate-800 dark:text-white print:text-slate-900">{cert.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 font-mono">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. Leadership */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600 flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    Leadership
                  </h2>
                  {leadershipList.map((lead) => (
                    <div key={lead.id} className="text-[11px]">
                      <p className="font-semibold text-slate-800 dark:text-white print:text-slate-900">
                        {lead.role} – {lead.organization}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 font-mono">{lead.period}</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">Coordinated social service initiatives, awareness campaigns and donation drives.</p>
                    </div>
                  ))}
                </div>

                {/* 9. Languages */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-violet-400 print:text-indigo-600">
                    Languages
                  </h2>
                  <div className="space-y-1">
                    {languagesList.map((lang) => (
                      <div key={lang.name} className="flex justify-between text-xs">
                        <span className="font-medium text-slate-700 dark:text-slate-300 print:text-slate-800">{lang.name}</span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Footer info - Hidden on Print */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-center text-[10px] text-slate-400 font-mono print:hidden">
          Powered by PDF generator. Print or Save as PDF using your browser.
        </div>
      </div>
    </div>
  );
}
