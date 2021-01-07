import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getSortedProjectsData = () => {
    // Get file names under /projects
    const filenames = fs.readdirSync(projectsDirectory);
    const allProjectsData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = filename.replace(/\.md$/, '');

        // Read markdown file as a string
        const fullPath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with id
        return {
            id,
            ...matterResult.data,
        };
    });

    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllProjectsIds = () => {
    const fileNames = fs.readdirSync(projectsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
};

export const getProjectData = async (id) => {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into html string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...(matterResult.data),
    };
};