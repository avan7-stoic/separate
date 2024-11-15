import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="about-us">
                {/* Tabs Section */}
                <section style={styles.tabsSection}>
                    <button style={styles.tabButton}>Our Impact</button>
                    <button style={styles.activeTabButton}>How We Work</button>
                    <button style={styles.tabButton}>Get Involved</button>
                </section>

                {/* Content Section */}
                <section style={styles.contentSection}>
                    <h3 style={styles.contentTitle}>How We Work</h3>
                    <p style={styles.contentSubtitle}>Our approach to creating sustainable change</p>
                    <p style={styles.contentText}>
                        We partner with local organizations to ensure sustainable, community-driven solutions that meet the
                        specific needs of each area we serve. Our approach includes:
                    </p>
                    <ul style={styles.list}>
                        <li>Distributing menstrual hygiene products to schools</li>
                        <li>Constructing and renovating sanitation facilities</li>
                        <li>Providing education on menstrual health and hygiene</li>
                        <li>Training local community members to ensure long-term sustainability</li>
                    </ul>
                    <a href="#" style={styles.exploreLink}>Explore Our Projects</a>
                </section>
            </div>
        </>
    );
};

const styles = {
    // existing styles...
    latestNewsSection: {
        padding: '2rem 0',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#f8eafa',
    },
    latestNewsTitle: {
        fontSize: '1.8rem',
        color: '#4b0082',
        fontWeight: 'bold',
    },
    newsCards: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
    },
    newsCard: {
        backgroundColor: '#fff',
        padding: '1rem',
        width: '250px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    },
    newsCardTitle: {
        fontSize: '1.2rem',
        color: '#4b0082',
        fontWeight: 'bold',
    },
    newsCardDate: {
        fontSize: '0.9rem',
        color: '#6a0dad',
        marginBottom: '0.5rem',
    },
    newsCardText: {
        fontSize: '1rem',
        lineHeight: '1.4',
        marginBottom: '0.5rem',
    },
    newsReadMore: {
        color: '#d63384',
        fontWeight: 'bold',
        textDecoration: 'none',
    },

};

export default AboutUs;
