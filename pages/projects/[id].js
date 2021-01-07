import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import { getAllProjectsIds, getProjectData } from '../../utils/projects';

const Project = ({ projectData }) => {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>
                <h1>{projectData.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: projectData.contentHtml,
                    }}
                />
            </article>
        </Layout>
    );
};

export default Project;

export const getStaticPaths = async () => {
    const paths = getAllProjectsIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
};
